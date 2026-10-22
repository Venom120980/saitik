import Image from "next/image";

export default function HomePage() {
return <main>Сайт BOXPACK</main>;

}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-[10px] bg-[#f0f0f0] p-5">
<p className="text-xs font-bold">ШАГ 1</p>
<h3 className="mt-2 text-xs">Оставляете заявку</h3>
</div>
<div className="rounded-[10px] bg-[#f0f0f0] p-5">
<p className="text-xs font-bold">ШАГ 2</p>
<h3 className="mt-2 text-xs">Получаете расчет</h3>
</div>
{/* ...остальные шаги по аналогии */}
</div>