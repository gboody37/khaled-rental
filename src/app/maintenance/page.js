export default function Maintenance() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md pb-24 md:pb-0">
      
 TopAppBar 
<header className="bg-surface border-b border-outline-variant shadow-sm w-full top-0 sticky z-40 hidden md:flex">
<div className="flex justify-between items-center px-margin-edge h-16 w-full">
<div className="flex items-center gap-md">
<span className="font-headline-md text-headline-md font-bold text-primary">EstateMaster</span>
<span className="text-on-surface-variant px-sm py-xs bg-surface-container rounded-full text-xs font-semibold uppercase tracking-wider ml-sm">Khaled Rental Mgt</span>
</div>

<nav className="hidden md:flex gap-lg">
<a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-md py-sm rounded-lg font-title-lg text-title-lg cursor-pointer active:scale-95 duration-150" href="#">Dashboard</a>
<a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-md py-sm rounded-lg font-title-lg text-title-lg cursor-pointer active:scale-95 duration-150" href="#">Properties</a>
<a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-md py-sm rounded-lg font-title-lg text-title-lg cursor-pointer active:scale-95 duration-150" href="#">Tenants</a>
<a className="text-primary hover:bg-surface-container-low transition-colors px-md py-sm rounded-lg font-title-lg text-title-lg cursor-pointer active:scale-95 duration-150" href="#">Maintenance</a>
</nav>
<div className="flex items-center gap-md">
<button className="p-sm text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer active:scale-95 duration-150">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="Professional headshot of a property manager in a corporate setting. Modern office background, soft natural lighting, high key corporate aesthetic. The subject is wearing business casual attire, conveying trust and reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnmv9L9QaUf7W6bQ6SIs9GNlbM3mDqwD-WKWYWmvydTlbJt1DwmgGdK5XZJix9Uf6yFTcrhbhRMKeNOh1jxDnzXGQLrDChRortJdUY_Naau8JvulG7nLWHiqgGyind-ydUqsg2ePZT3AevVwSkce1s3xKTc39JrksPW2FUDxrL91iDjZazFlCScPIHWTFOUsPGMzkS9GiyJz6NgR3LCSxqvAhTgaH8asaE0k4bB-5R1o3MV8JxQ0lG"/>
</div>
</div>
</div>
</header>
 Mobile Header (Minimal) 
<header className="md:hidden bg-surface border-b border-outline-variant p-md sticky top-0 z-40 flex justify-between items-center">
<span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Maintenance</span>
<button className="p-xs text-on-surface-variant">
<span className="material-symbols-outlined">filter_list</span>
</button>
</header>
 Main Content Canvas 
<main className="flex-1 p-md md:p-margin-edge max-w-[1600px] mx-auto w-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary hidden md:block">Maintenance Board</h1>
<p className="text-on-surface-variant font-body-lg mt-xs">Manage active service requests across all properties.</p>
</div>
<div className="flex gap-sm w-full md:w-auto">
<div className="relative flex-1 md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-shadow text-on-surface font-body-md placeholder-on-surface-variant/70" placeholder="Search tickets..." type="text"/>
</div>
<button className="bg-primary text-on-primary px-lg py-3 rounded-lg font-title-lg text-title-lg flex items-center gap-sm hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined">add</span>
<span className="hidden md:inline">New Ticket</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-lg">

<div className="bg-surface-container rounded-xl p-md flex flex-col gap-sm border border-outline-variant kanban-column">
<div className="flex justify-between items-center mb-sm px-xs">
<h2 className="font-title-lg text-title-lg text-primary flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-error"></span> New
                    </h2>
<span className="bg-surface text-on-surface-variant px-2 py-1 rounded text-sm font-semibold shadow-sm">2</span>
</div>

<div className="bg-surface rounded-lg p-md border border-outline-variant shadow-sm hover:bg-surface-container-lowest transition-colors cursor-pointer group flex flex-col gap-sm">
<div className="flex justify-between items-start">
<span className="bg-error-container text-on-error-container px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider">High Priority</span>
<span className="text-on-surface-variant text-sm">#TKT-892</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">Leaking Sink in Kitchen</h3>
<p className="text-on-surface-variant font-body-md flex items-center gap-xs mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> 142 Oakwood Ave, Apt 4B
                        </p>
</div>
<div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/30">
<div className="flex items-center gap-xs">
<div className="w-6 h-6 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Small thumbnail of a smiling tenant, casual attire, bright natural lighting, professional property management context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiJej3YxfHwdAVNZuIBpgzK8w0Pa6sfS-N7dJg9fH46Z8OREP63wjh90cla5VNiKAuMsvtJta071ch9brNdtu89Z93pl3X6zUT-FFEVCnx1DP1llimyBc59tB7tb6paKoKmwT0I6i5G-2WWM15OosSrxUZ_-BoiCKKqO-HmtCOaIx6zwzKrm5mY-wgUnorLLL9uvwx0N6Jp0z5hua4LK1oBkfiMNhFJJRbA87P_EJIyye51UpQUsU9"/>
</div>
<span className="text-sm text-on-surface-variant">Sarah Jenkins</span>
</div>
<span className="text-xs text-on-surface-variant">2h ago</span>
</div>
</div>

<div className="bg-surface rounded-lg p-md border border-outline-variant shadow-sm hover:bg-surface-container-lowest transition-colors cursor-pointer group flex flex-col gap-sm">
<div className="flex justify-between items-start">
<span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Low Priority</span>
<span className="text-on-surface-variant text-sm">#TKT-894</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">Hallway light bulb burnt out</h3>
<p className="text-on-surface-variant font-body-md flex items-center gap-xs mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> 88 Pine St, Common Area
                        </p>
</div>
<div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/30">
<div className="flex items-center gap-xs">
<div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center text-xs text-primary font-bold">KM</div>
<span className="text-sm text-on-surface-variant">Kevin M. (Staff)</span>
</div>
<span className="text-xs text-on-surface-variant">5h ago</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-md flex flex-col gap-sm border border-outline-variant kanban-column">
<div className="flex justify-between items-center mb-sm px-xs">
<h2 className="font-title-lg text-title-lg text-primary flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-surface-tint"></span> In Progress
                    </h2>
<span className="bg-surface text-on-surface-variant px-2 py-1 rounded text-sm font-semibold shadow-sm">1</span>
</div>

<div className="bg-surface rounded-lg p-md border border-outline-variant shadow-sm hover:bg-surface-container-lowest transition-colors cursor-pointer group flex flex-col gap-sm">
<div className="flex justify-between items-start">
<span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Medium Priority</span>
<span className="text-on-surface-variant text-sm">#TKT-889</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-primary group-hover:text-secondary transition-colors">HVAC making rattling noise</h3>
<p className="text-on-surface-variant font-body-md flex items-center gap-xs mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> 500 Central Plaza, Suite 200
                        </p>
</div>
<div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/30">
<div className="flex items-center gap-xs">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">
<span className="material-symbols-outlined text-sm">handyman</span>
</div>
<span className="text-sm text-on-surface-variant">Apex Cooling Inc.</span>
</div>
<span className="text-xs text-secondary font-semibold">ETA: Today 2PM</span>
</div>
</div>
</div>

<div className="bg-surface-container rounded-xl p-md flex flex-col gap-sm border border-outline-variant kanban-column opacity-75">
<div className="flex justify-between items-center mb-sm px-xs">
<h2 className="font-title-lg text-title-lg text-primary flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Resolved
                    </h2>
<span className="bg-surface text-on-surface-variant px-2 py-1 rounded text-sm font-semibold shadow-sm">2</span>
</div>

<div className="bg-surface/50 rounded-lg p-md border border-outline-variant shadow-sm hover:bg-surface transition-colors cursor-pointer group flex flex-col gap-sm">
<div className="flex justify-between items-start">
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Closed
                        </span>
<span className="text-on-surface-variant text-sm line-through">#TKT-885</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface-variant">Replace broken blinds</h3>
<p className="text-on-surface-variant/70 font-body-md flex items-center gap-xs mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> 12 Maple Dr, Unit C
                        </p>
</div>
<div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/30">
<span className="text-xs text-on-surface-variant">Closed by Mike R.</span>
<span className="text-xs text-on-surface-variant">Yesterday</span>
</div>
</div>

<div className="bg-surface/50 rounded-lg p-md border border-outline-variant shadow-sm hover:bg-surface transition-colors cursor-pointer group flex flex-col gap-sm">
<div className="flex justify-between items-start">
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Closed
                        </span>
<span className="text-on-surface-variant text-sm line-through">#TKT-880</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface-variant">Paint touch-ups in lobby</h3>
<p className="text-on-surface-variant/70 font-body-md flex items-center gap-xs mt-1">
<span className="material-symbols-outlined text-sm">location_on</span> 88 Pine St, Common Area
                        </p>
</div>
<div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/30">
<span className="text-xs text-on-surface-variant">Closed by Staff</span>
<span className="text-xs text-on-surface-variant">Oct 12</span>
</div>
</div>
</div>
</div>
</main>
 BottomNavBar (Mobile Only) 
<nav className="md:hidden fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 bg-surface border-t border-outline-variant shadow-[0_-4px_6px_rgba(0,0,0,0.05)] z-50">
<a className="flex flex-col items-center justify-center text-on-surface-variant active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" style={{'fontVariationSettings': "'FILL' 0"}}>dashboard</span>
<span className="font-label-md text-label-md mt-1">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" style={{'fontVariationSettings': "'FILL' 0"}}>domain</span>
<span className="font-label-md text-label-md mt-1">Properties</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" style={{'fontVariationSettings': "'FILL' 0"}}>groups</span>
<span className="font-label-md text-label-md mt-1">Tenants</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" style={{'fontVariationSettings': "'FILL' 1"}}>build</span>
<span className="font-label-md text-label-md mt-1">Maintenance</span>
</a>
</nav>

    </div>
  );
}
