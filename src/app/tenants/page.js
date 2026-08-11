export default function Tenants() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      

<header className="w-full top-0 sticky border-b border-outline-variant dark:border-outline shadow-sm bg-surface dark:bg-surface-container-low z-40">
<div className="flex justify-between items-center px-margin-edge h-16 w-full">
<div className="flex items-center gap-sm">

<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden flex-shrink-0">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="Professional headshot of a property manager in a corporate setting, soft lighting, sharp focus, neutral background, conveying trust and reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANg6ihPRLp1vx2URzx0ETub6Q7iQaRE9UDviwPksK-gtyPKNY8ezA2lxdLQgexEC0hR3gwd09CTDWLqMbF9v0-gDw12WVJF2MtxQPg0IzInw0Ln_WX5CMhfrfTlO8Ska8ptJn-mRmCAlacdnDVDtawq-Qf6aC19yUNZKze4ILo0lnfQseuQMs8M11Z3PXXt7G-3bwKDc6c52DlYHM2jRozV6m_HVIHxRig_b9QjkQqcOUqtMNkZ3TN"/>
</div>
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">EstateMaster</h1>
</div>

<nav className="hidden md:flex gap-lg">
<a className="font-title-lg text-title-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150" href="#">Dashboard</a>
<a className="font-title-lg text-title-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150" href="#">Properties</a>
<a className="font-title-lg text-title-lg text-primary dark:text-primary-fixed hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150 bg-surface-container-low" href="#">Tenants</a>
<a className="font-title-lg text-title-lg text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-lg px-3 py-2 cursor-pointer active:scale-95 duration-150" href="#">Maintenance</a>
</nav>
<button className="p-2 rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 duration-150 text-on-surface-variant dark:text-surface-variant">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</div>
</header>

<main className="flex-grow container mx-auto px-4 md:px-margin-edge py-lg pb-24 md:pb-lg flex flex-col gap-lg">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Tenant Directory</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Khaled Rental Management</p>
</div>
<div className="flex gap-sm w-full md:w-auto">
<div className="relative flex-grow md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-shadow text-body-md font-body-md text-on-surface placeholder:text-outline" placeholder="Search tenants..." type="text"/>
</div>
<button className="bg-primary text-on-primary font-title-lg text-title-lg px-4 py-2 rounded-lg hover:bg-primary-container transition-colors shadow-sm flex items-center gap-xs flex-shrink-0">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span className="hidden md:inline">Add Tenant</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col gap-md hover:bg-[#F1F5F9] transition-colors group cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex gap-md items-center">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant flex-shrink-0">
<img alt="Sarah Jenkins" className="w-full h-full object-cover" data-alt="Professional headshot of a young woman, bright smile, natural lighting, modern apartment background, conveying approachability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9mgCWQjeHioEndlxlCyn_EdW3BDPShx5vT2odk6JLM5Q4xtrSPfNouAx4SqDlKNJ_EmFs81pLpTGpxU_YB0d5BvAj5QpdkeZrOmQWQZW13wOdOy6BaKwQDKY6PFkJnCIl3zflrWt7D2bbgnh_yag9pyANFakGT8BPDmZibnlrJ66eBhxQDCRdkWZbixSSl426_S-0yCH7BB5sN6rgCgUvsF-rzyJAsQ9qj3xUUwz-qRPAFcsopEk1"/>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">Sarah Jenkins</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">domain</span>
                                Unit 4B - The Azure
                            </p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-sm">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-secondary-container text-on-secondary-container">
<span className="material-symbols-outlined text-[14px] mr-1">check_circle</span> Paid
                    </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface">
                        Lease: Active
                    </span>
</div>
<div className="border-t border-outline-variant pt-sm mt-auto flex justify-between items-center">
<span className="font-body-md text-body-md text-outline">Lease ends: Nov 2024</span>
<div className="flex gap-sm">
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]" data-icon="chat">chat</span>
</button>
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Call">
<span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col gap-md hover:bg-[#F1F5F9] transition-colors group cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex gap-md items-center">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant flex-shrink-0">
<img alt="Marcus Wright" className="w-full h-full object-cover" data-alt="Professional headshot of a middle-aged man, glasses, slightly formal attire, neutral corporate background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-E3qXftNIrAUVYigQxEBWGDEJ4rQVEBo1edUZ-zyFhuD6Ids_3tXK22OxRrMXi7ckG1SwJkOG-8rA606iwh3v3_ex8Y2VSjNAhJkhVpltHtoMCvT_xwYq2mux7agnfdqsitWCqzZGpthq0RrBx3bLYKToe5kzJXgVFpvgi5Ev0H5aY7xDlIkvd9j8CBZa4m7kJr_DxsdNd0qEaMXOHVYeBjrDYWyzjFUuOZFNyopMIN1xqqZlZTA-"/>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">Marcus Wright</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">domain</span>
                                Unit 12A - Pine Crest
                            </p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-sm">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-error-container text-on-error-container">
<span className="material-symbols-outlined text-[14px] mr-1">warning</span> Overdue
                    </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface">
                        Lease: Active
                    </span>
</div>
<div className="border-t border-outline-variant pt-sm mt-auto flex justify-between items-center">
<span className="font-body-md text-body-md text-outline">Lease ends: Jan 2025</span>
<div className="flex gap-sm">
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]" data-icon="chat">chat</span>
</button>
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Call">
<span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col gap-md hover:bg-[#F1F5F9] transition-colors group cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex gap-md items-center">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant flex-shrink-0">
<img alt="The Thompsons" className="w-full h-full object-cover" data-alt="Professional headshot of an elderly couple, smiling, warm lighting, homey background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiJpPonMPFQ4oG6IQR-bspl88G54dsMBDTv7qNRpQA55M4DqsAOCpg5VUQezgeN475Ab2vImjLwRmUDj8I_K-RSR4eAEsq5S0t2mXkzfg8EX3WptvCCWFC7FpSx4L4TNeT2zPFIa0uWeo0AFBVBXC0tQw5hjsDxZzUaM8gaFcNvXB8h0MgLPJhOQHRMDLiv7M1zDQvv9nDj5S8x0INvLtAwCxFGwrwuy646extZW7BdVAaR-Ic0XFq"/>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">The Thompsons</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">domain</span>
                                142 Maple Street
                            </p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-sm">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-secondary-container text-on-secondary-container">
<span className="material-symbols-outlined text-[14px] mr-1">check_circle</span> Paid
                    </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface">
                        Lease: Active
                    </span>
</div>
<div className="border-t border-outline-variant pt-sm mt-auto flex justify-between items-center">
<span className="font-body-md text-body-md text-outline">Lease ends: Mar 2026</span>
<div className="flex gap-sm">
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]" data-icon="chat">chat</span>
</button>
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Call">
<span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col gap-md hover:bg-[#F1F5F9] transition-colors group cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex gap-md items-center">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant flex-shrink-0 flex items-center justify-center text-primary font-title-lg">
                            EK
                        </div>
<div>
<h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">Elena Kostic</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">domain</span>
                                Unit 7C - The Azure
                            </p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-sm">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-[#FFF3CD] text-[#856404]">
<span className="material-symbols-outlined text-[14px] mr-1">pending</span> Pending
                    </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface">
                        Lease: Active
                    </span>
</div>
<div className="border-t border-outline-variant pt-sm mt-auto flex justify-between items-center">
<span className="font-body-md text-body-md text-outline">Lease ends: Aug 2025</span>
<div className="flex gap-sm">
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Message">
<span className="material-symbols-outlined text-[20px]" data-icon="chat">chat</span>
</button>
<button className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-container transition-colors" title="Call">
<span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
</button>
</div>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 bg-surface dark:bg-surface-container-lowest z-50 shadow-[0_-4px_6px_rgba(0,0,0,0.05)] border-t border-outline-variant dark:border-outline">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest active:scale-90 transition-transform duration-200 px-2 py-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md mt-1">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest active:scale-90 transition-transform duration-200 px-2 py-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="domain">domain</span>
<span className="font-label-md text-label-md mt-1">Properties</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-label-md text-label-md mt-1">Tenants</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest active:scale-90 transition-transform duration-200 px-2 py-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="build">build</span>
<span className="font-label-md text-label-md mt-1">Maintenance</span>
</a>
</nav>

    </div>
  );
}
