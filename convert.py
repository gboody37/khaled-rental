import os
import re
from bs4 import BeautifulSoup, Comment

def html_to_react(html_string):
    html_string = html_string.replace('class=', 'className=')
    html_string = html_string.replace('for=', 'htmlFor=')
    html_string = html_string.replace('tabindex=', 'tabIndex=')
    html_string = html_string.replace('readonly', 'readOnly')
    html_string = html_string.replace('autocomplete', 'autoComplete')
    html_string = html_string.replace('autofocus', 'autoFocus')
    html_string = html_string.replace('maxlength', 'maxLength')
    html_string = html_string.replace('minlength', 'minLength')
    html_string = html_string.replace('onclick', 'onClick')
    html_string = html_string.replace('onsubmit', 'onSubmit')
    html_string = html_string.replace('onchange', 'onChange')
    
    html_string = html_string.replace('$', 'JOD ')
    
    html_string = re.sub(r'<(img|input|hr|br)([^>]*?)(?<!/)>', r'<\1\2/>', html_string)
    
    def style_replacer(match):
        style_str = match.group(1)
        parts = style_str.split(';')
        styles = []
        for part in parts:
            if ':' in part:
                k, v = part.split(':', 1)
                k = k.strip()
                v = v.strip()
                k_parts = k.split('-')
                k = k_parts[0] + ''.join(x.title() for x in k_parts[1:])
                styles.append(f"'{k}': \"{v}\"")
        return f"style={{{{{', '.join(styles)}}}}}"
    
    html_string = re.sub(r'style="([^"]*)"', style_replacer, html_string)
    
    return html_string

def process_file(filepath, out_path, is_layout=False):
    with open(filepath, 'r') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract comments
    for element in soup.find_all(string=lambda text: isinstance(text, Comment)):
        element.extract()
        
    body = soup.body
    if not body:
        return
        
    body_classes = body.get('class', [])
    body_class_str = ' '.join(body_classes)
    
    content = ""
    for child in body.children:
        content += str(child)
        
    react_content = html_to_react(content)
    
    component_name = os.path.basename(out_path).split('.')[0].capitalize()
    if component_name == 'Page':
        component_name = os.path.basename(os.path.dirname(out_path)).capitalize()
        if component_name == 'App':
            component_name = 'Dashboard'
            
    code = f"""export default function {component_name}() {{
  return (
    <div className="{body_class_str}">
      {react_content}
    </div>
  );
}}
"""
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w') as f:
        f.write(code)

files = [
    ('dashboard.html', 'src/app/page.js'),
    ('properties.html', 'src/app/properties/page.js'),
    ('maintenance.html', 'src/app/maintenance/page.js'),
    ('tenants.html', 'src/app/tenants/page.js'),
]

for in_file, out_file in files:
    process_file(in_file, out_file)
