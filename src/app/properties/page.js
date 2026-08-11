export default function Properties() {
  return (
    <div className="bg-background text-on-background min-h-screen font-sans antialiased pb-24 md:pb-0">
      

<header className="w-full top-0 sticky bg-surface border-b border-outline-variant shadow-sm z-40 hidden md:flex">
<div className="flex justify-between items-center px-margin-edge h-16 w-full max-w-7xl mx-auto">
<div className="flex items-center gap-4">

<h1 className="font-headline-md text-headline-md font-bold text-primary">EstateMaster</h1>

<nav className="hidden md:flex ml-8 gap-1">
<a className="px-4 py-2 rounded-lg font-title-lg text-title-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 duration-150" href="#">
                        Dashboard
                    </a>
<a className="px-4 py-2 rounded-lg font-title-lg text-title-lg text-primary bg-surface-container-low transition-colors cursor-pointer active:scale-95 duration-150" href="#">
                        Properties
                    </a>
<a className="px-4 py-2 rounded-lg font-title-lg text-title-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 duration-150" href="#">
                        Tenants
                    </a>
<a className="px-4 py-2 rounded-lg font-title-lg text-title-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95 duration-150" href="#">
                        Maintenance
                    </a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer active:scale-95 duration-150">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="A professional headshot of a property manager in a well-lit modern office setting. Sharp focus, high resolution, corporate aesthetic. Soft, bright lighting conveying trust and competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQe_UutnQSMpoh30vOc8K5Hm_0KtVDXyJzhOYaoAGKSMzoyk84vhPYMUs2LBtyj68ekY3QzGDe1VsqoD_rsCx-v2y9WhN7jnSBd7Jy14phkXf9BR3rLPUTOS7HsSEiHIeLfPOwNW1wIXWIv0SDYdD78tZ3DgoPt7edUBF-H-kyS7tgyDmmRkDSV_Ll4leg8FJ6Mdv5q9dxadDJ6f9nAh79xE-sLzKc7EqU2l2vEvJKbFRjET0kiI72"/>
</button>
</div>
</div>
</header>

<header className="w-full top-0 sticky bg-surface border-b border-outline-variant shadow-sm z-40 md:hidden flex justify-between items-center px-4 h-16">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Properties</h1>
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 md:px-margin-edge py-lg md:py-xl">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div>
<h2 className="font-display-lg text-display-lg text-primary hidden md:block">Properties</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage and track your real estate portfolio.</p>
</div>
<div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
<div className="relative w-full sm:w-80">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-body-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-shadow outline-none placeholder:text-outline" placeholder="Search addresses, units..." type="text"/>
</div>
<button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-title-lg hover:bg-surface-container-low transition-colors whitespace-nowrap">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                    Filter
                </button>
<button className="hidden md:flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-on-secondary font-title-lg hover:bg-on-secondary-fixed-variant transition-colors shadow-sm whitespace-nowrap">
<span className="material-symbols-outlined" data-icon="add">add</span>
                    Add Property
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<article className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_6px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer flex flex-col h-full relative">
<div className="relative h-48 w-full overflow-hidden">
<img alt="1248 Vista Ridge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Exterior view of a modern luxury apartment building with large glass windows and clean architectural lines. Sunny day, clear blue sky, high end real estate photography, bright lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9dDaPF8gdVZhuIFDWBSX_73P-tRqu_TZOpuGJLoeSTiCFr-Fb95TNijm3_zNHsg-dtNvyQnclBmR9NOx0p1dp2rcHWaIErjyj8VL-veA8yVOGMU9L_K09K-IyNbXavVTvjmG_iYhFcz73iuiclKHlCXSHsmWAglP7BqGDzYFJ1cNQxYjRlNTr_HausCG36uHBuGhwdtIRvaci81p5ePzH4eHRjmK1SvkTzBwYSO2zATlINZ0l95Si"/>
<div className="absolute top-3 right-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] filled" data-icon="check_circle">check_circle</span>
                        Occupied
                    </div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-title-lg text-title-lg text-primary mb-1 truncate">1248 Vista Ridge</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 truncate">Apt 4B • Portland, OR</p>
<div className="mt-auto grid grid-cols-2 gap-4 border-t border-outline-variant pt-4">
<div>
<p className="font-label-md text-label-md text-outline uppercase">Rent</p>
<p className="font-headline-md text-headline-md text-primary">JOD 2,450</p>
</div>
<div>
<p className="font-label-md text-label-md text-outline uppercase">Tenant</p>
<p className="font-body-lg text-body-lg text-primary font-medium truncate">Sarah J.</p>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_6px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer flex flex-col h-full relative">
<div className="relative h-48 w-full overflow-hidden">
<img alt="890 Maple Drive" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A charming single family home with a well manicured lawn and a welcoming front porch. Residential neighborhood, daytime, bright sunny lighting, professional real estate shot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyEnP-6x8Sil2w5ZuYF-6AE_3pBM6xBE_1Ruga8DHP9wowJBW5lDskrjq3fGooWXgRQR8Mn13qvaRSD6uQboLxGBJabVfUzMrxSC-P-86kgbm2GDBFRfCsK9BBhbLjdleUSjMfwLEPV63fXQ4ZvJKyKZRRTaO7wy2ox429UOy3AdCeWRU0WhyDAsXHO0qPvCUTErI8zXFE40VDqcBwj-bg6nj5YzQ2zTqT02T8e2_7h5bB1zHTkKEI"/>
<div className="absolute top-3 right-3 bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-label-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="key">key</span>
                        Vacant
                    </div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-title-lg text-title-lg text-primary mb-1 truncate">890 Maple Drive</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 truncate">Single Family • Austin, TX</p>
<div className="mt-auto grid grid-cols-2 gap-4 border-t border-outline-variant pt-4">
<div>
<p className="font-label-md text-label-md text-outline uppercase">Listed</p>
<p className="font-headline-md text-headline-md text-primary">JOD 3,200</p>
</div>
<div>
<p className="font-label-md text-label-md text-outline uppercase">Days on Mkt</p>
<p className="font-body-lg text-body-lg text-primary font-medium">14 Days</p>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_6px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer flex flex-col h-full relative">
<div className="relative h-48 w-full overflow-hidden">
<img alt="Studio 54, The Foundry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Interior view of a modern loft apartment featuring exposed brick walls, high ceilings, and large industrial windows. Bright natural light, contemporary design aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7qY9hzQhCzgQuHruaF3hBNsH6gOseAGgNjjsbt79FgCnzAPrgvFFQ-_siwreGcln-_XGZkFXD8ixTkrHyEi1dD34jN-EvzDUY1gW6HIqR-huByjUNC2BP42k90fmUKXfUSipj5yy8q3akZeI5xfoB3KLu-68KkwqF7dpjdXC-7TPUyofJUPEmMvXy5cQRIImN3y2q_AAO-VsYO1dhjy0a68oATudynPdLEzeDCZI5wpr2rc2l2mBC"/>
<div className="absolute top-3 right-3 bg-[#FFEDD5] text-[#9A3412] font-label-md text-label-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] filled" data-icon="build">build</span>
                        Maintenance
                    </div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-title-lg text-title-lg text-primary mb-1 truncate">Studio 54, The Foundry</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 truncate">Loft • Chicago, IL</p>
<div className="mt-auto grid grid-cols-2 gap-4 border-t border-outline-variant pt-4">
<div className="col-span-2">
<p className="font-label-md text-label-md text-outline uppercase mb-1">Active Issue</p>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-[#9A3412]" data-icon="water_drop">water_drop</span>
<p className="font-body-md text-body-md text-primary truncate">HVAC Leak - Plumber scheduled</p>
</div>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_6px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer flex flex-col h-full relative">
<div className="relative h-48 w-full overflow-hidden">
<img alt="402 Pine St" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A contemporary townhouse exterior with a small front garden and paved driveway. Overcast but bright lighting, clean modern suburban neighborhood feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLob1qofD4t-JNbF3K9xWpJXzv6aM_elAy1eVn7_QkYlNopYZ6cznSdxCZLdcKL9tyBWyNunj3j70UB7YOEEoRrnbdYx2F__nBvwRD8H_C1tNSlXOnnX0ay1FAJ3kOjQdMcvrQJUO8ubPnbz8Ge7zQ-2r1aJHZmLmFPcY3UUP8hQBhk9exuErbVtkJz6ktdG9Y_psfUc-WZXnwNZVRMk_AGQD9dnNRrQeLADMYQJ8mwe8qqdeNS8js"/>
<div className="absolute top-3 right-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] filled" data-icon="check_circle">check_circle</span>
                        Occupied
                    </div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-title-lg text-title-lg text-primary mb-1 truncate">402 Pine St</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 truncate">Townhouse • Denver, CO</p>
<div className="mt-auto grid grid-cols-2 gap-4 border-t border-outline-variant pt-4">
<div>
<p className="font-label-md text-label-md text-outline uppercase">Rent</p>
<p className="font-headline-md text-headline-md text-primary">JOD 2,800</p>
</div>
<div>
<p className="font-label-md text-label-md text-outline uppercase">Tenant</p>
<p className="font-body-lg text-body-lg text-primary font-medium truncate">Marcus T.</p>
</div>
</div>
</div>
</article>
</div>
</main>

<button className="md:hidden fixed bottom-[96px] right-4 w-14 h-14 bg-secondary text-on-secondary rounded-xl shadow-lg flex items-center justify-center z-50 hover:bg-on-secondary-fixed-variant transition-colors active:scale-95">
<span className="material-symbols-outlined text-[28px]" data-icon="add">add</span>
</button>

<nav className="fixed bottom-0 w-full z-50 border-t border-outline-variant bg-surface shadow-[0_-4px_6px_rgba(0,0,0,0.05)] md:hidden">
<div className="flex justify-around items-center px-4 h-20">
<a className="flex flex-col items-center justify-center text-on-surface-variant active:scale-90 transition-transform duration-200 w-16" href="#">
<div className="flex flex-col items-center justify-center py-1 px-4 rounded-full w-full">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
</div>
<span className="font-label-md text-label-md mt-1">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center active:scale-90 transition-transform duration-200 w-16" href="#">
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 w-full">
<span className="material-symbols-outlined filled" data-icon="domain">domain</span>
</div>
<span className="font-label-md text-label-md mt-1 text-primary">Properties</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant active:scale-90 transition-transform duration-200 w-16" href="#">
<div className="flex flex-col items-center justify-center py-1 px-4 rounded-full w-full">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
</div>
<span className="font-label-md text-label-md mt-1">Tenants</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant active:scale-90 transition-transform duration-200 w-16" href="#">
<div className="flex flex-col items-center justify-center py-1 px-4 rounded-full w-full">
<span className="material-symbols-outlined" data-icon="build">build</span>
</div>
<span className="font-label-md text-label-md mt-1">Maintenance</span>
</a>
</div>
</nav>

    </div>
  );
}
