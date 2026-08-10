export default function Dashboard() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col md:flex-row">
      
  
 TopAppBar 
<header className="w-full top-0 sticky bg-surface dark:bg-surface-container-low shadow-sm z-40 hidden md:block">
<div className="flex justify-between items-center px-margin-edge h-16 w-full border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">EstateMaster</span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 duration-150 text-on-surface-variant dark:text-surface-variant">
<span className="material-symbols-outlined">notifications</span>
</button>
<img className="w-8 h-8 rounded-full object-cover" data-alt="A professional headshot of a property manager, smiling slightly, in a modern office setting with good lighting. The image is clean, sharp, and conveys trust and competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzVGrn-wvBH2sjjMOFWqkbd47zXR-3ymUxfAzahzgcbLMa4yDTmEJ44sp_ciTVdVoxvy6OVyf4N-eqSSat0ML_j44UhEtKOm7RE39xiLdkAj2_PlKCCk5TMe0kplZC934vPjuwrB_5VxjydO-a6mWET6JA2_XADBt1dLwjeEiHp-l9ubOQwPyUB38KCbnDJ1oFvjFSX6WYk3OXF-noXm-mn1qlVY9w1tVGCiG0lyHvxh4pnJgy5qc-"/>
</div>
</div>
</header>
  
<header className="w-full top-0 sticky bg-surface dark:bg-surface-container-low shadow-sm z-40 md:hidden flex justify-between items-center px-4 h-16">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">EstateMaster</span>
<img className="w-8 h-8 rounded-full object-cover" data-alt="A professional headshot of a property manager, smiling slightly, in a modern office setting with good lighting. The image is clean, sharp, and conveys trust and competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6HZ6zBXZS-_gkOZ0BIx-SgCLyUYCcfbzQHBe2mab8uhcE_gT6RoP7UhTIwPEuu51CwmDFZBMiSXR-TJl-QY7KDIiHmzN1-4-542qrAe3JhzGN4K7yqSiqNC7j4m-WD1ebKVa7g11MX7iS2NMkVOhfAZqFBoHHMpjPly1QYOxxY4tMkbDcEc1eEHwSQpkd8-O_6qQr5RaIrZt5ugkdjd-Ezu7D11QcAO3YP_n62A5pfpr-HyGMKGrU"/>
</header>
 Main Content 
<main className="flex-1 p-4 md:p-margin-edge md:ml-0 pb-24 md:pb-margin-edge">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h1 className="font-display-lg text-display-lg text-primary">Dashboard</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Welcome back, Khaled Rental Management.</p>
</div>
<div className="flex gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none bg-primary text-on-primary px-6 py-3 rounded-lg font-title-lg text-title-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
                    Add Property
                </button>
<button className="flex-1 md:flex-none bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-title-lg text-title-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">payments</span>
                    Log Payment
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-4 bg-surface-container-lowest rounded-[12px] border border-outline-variant p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col justify-between">
<div>
<h2 className="font-title-lg text-title-lg text-primary mb-2">Occupancy Rate</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Across 45 active properties</p>
</div>
<div className="flex items-end justify-between">
<span className="font-display-lg text-display-lg text-secondary">92%</span>
<span className="font-label-md text-label-md text-secondary-container bg-secondary px-2 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +2%
                    </span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2 mt-4">
<div className="bg-secondary h-2 rounded-full" style={{'width': "92%"}}></div>
</div>
</div>

<div className="md:col-span-4 bg-surface-container-lowest rounded-[12px] border border-outline-variant p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)]">
<h2 className="font-title-lg text-title-lg text-primary mb-6">Rent Collection</h2>
<div className="space-y-4">

<div>
<div className="flex justify-between font-body-md text-body-md mb-1">
<span className="text-on-surface-variant">Paid</span>
<span className="font-semibold text-primary">JOD 42,500</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-secondary h-2 rounded-full" style={{'width': "75%"}}></div>
</div>
</div>

<div>
<div className="flex justify-between font-body-md text-body-md mb-1">
<span className="text-on-surface-variant">Pending</span>
<span className="font-semibold text-primary">JOD 8,200</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-primary-container h-2 rounded-full" style={{'width': "15%"}}></div>
</div>
</div>

<div>
<div className="flex justify-between font-body-md text-body-md mb-1">
<span className="text-on-surface-variant">Overdue</span>
<span className="font-semibold text-error">JOD 3,100</span>
</div>
<div className="w-full bg-error-container rounded-full h-2">
<div className="bg-error h-2 rounded-full" style={{'width': "10%"}}></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 grid grid-rows-2 gap-6">
<div className="bg-surface-container-lowest rounded-[12px] border border-outline-variant p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex items-center justify-between">
<div>
<p className="font-body-md text-body-md text-on-surface-variant">Active Tenants</p>
<p className="font-headline-lg text-headline-lg text-primary">128</p>
</div>
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">group</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-[12px] border border-outline-variant p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex items-center justify-between">
<div>
<p className="font-body-md text-body-md text-on-surface-variant">Open Maintenance</p>
<p className="font-headline-lg text-headline-lg text-primary">12</p>
</div>
<div className="w-12 h-12 rounded-full bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined">build</span>
</div>
</div>
</div>

<div className="md:col-span-8 bg-surface-container-lowest rounded-[12px] border border-outline-variant p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] min-h-[300px] flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="font-title-lg text-title-lg text-primary">Revenue Overview</h2>
<select className="bg-surface border-outline-variant text-on-surface-variant font-body-md text-body-md rounded-md">
<option>This Year</option>
<option>Last Year</option>
</select>
</div>

<div className="flex-1 relative w-full flex items-end justify-between px-2 pt-10 border-b border-l border-outline-variant">

<div className="w-1/12 h-[40%] bg-secondary opacity-80 rounded-t-sm relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-md text-label-md px-2 py-1 rounded hidden group-hover:block">JOD 32k</div>
</div>
<div className="w-1/12 h-[50%] bg-secondary opacity-80 rounded-t-sm relative group cursor-pointer"></div>
<div className="w-1/12 h-[45%] bg-secondary opacity-80 rounded-t-sm relative group cursor-pointer"></div>
<div className="w-1/12 h-[60%] bg-secondary opacity-80 rounded-t-sm relative group cursor-pointer"></div>
<div className="w-1/12 h-[75%] bg-secondary opacity-80 rounded-t-sm relative group cursor-pointer"></div>
<div className="w-1/12 h-[80%] bg-secondary opacity-80 rounded-t-sm relative group cursor-pointer"></div>
<div className="w-1/12 h-[85%] bg-secondary opacity-80 rounded-t-sm relative group cursor-pointer"></div>
<div className="w-1/12 h-[90%] bg-secondary rounded-t-sm relative group cursor-pointer shadow-[0_0_10px_rgba(108,248,187,0.3)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-md text-label-md px-2 py-1 rounded">JOD 53k</div>
</div>
</div>
<div className="flex justify-between mt-2 font-label-md text-label-md text-on-surface-variant px-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
</div>
</div>

<div className="md:col-span-4 bg-surface-container-lowest rounded-[12px] border border-outline-variant p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)]">
<h2 className="font-title-lg text-title-lg text-primary mb-4">Recent Activity</h2>
<div className="space-y-4">
<div className="flex items-center gap-4 p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<p className="font-body-md text-body-md font-semibold text-primary">Rent Paid - Apt 4B</p>
<p className="font-label-md text-label-md text-on-surface-variant">John Doe • 2 hours ago</p>
</div>
</div>
<div className="flex items-center gap-4 p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined">build</span>
</div>
<div>
<p className="font-body-md text-body-md font-semibold text-primary">Maintenance Request</p>
<p className="font-label-md text-label-md text-on-surface-variant">Plumbing issue • 5 hours ago</p>
</div>
</div>
<div className="flex items-center gap-4 p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined">person_add</span>
</div>
<div>
<p className="font-body-md text-body-md font-semibold text-primary">New Lease Signed</p>
<p className="font-label-md text-label-md text-on-surface-variant">Unit 12A • 1 day ago</p>
</div>
</div>
</div>
</div>
</div>
</main>
 BottomNavBar (Mobile Only) 
<nav className="md:hidden fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 border-t border-outline-variant dark:border-outline bg-surface dark:bg-surface-container-lowest shadow-[0_-4px_6px_rgba(0,0,0,0.05)] z-50">
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-weight="fill" style={{'fontVariationSettings': "'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-label-md mt-1">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest active:scale-90 transition-transform duration-200 px-4 py-1 rounded-full" href="#">
<span className="material-symbols-outlined">domain</span>
<span className="font-label-md text-label-md mt-1">Properties</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest active:scale-90 transition-transform duration-200 px-4 py-1 rounded-full" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-label-md text-label-md mt-1">Tenants</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest active:scale-90 transition-transform duration-200 px-4 py-1 rounded-full" href="#">
<span className="material-symbols-outlined">build</span>
<span className="font-label-md text-label-md mt-1">Maintenance</span>
</a>
</nav>

    </div>
  );
}
