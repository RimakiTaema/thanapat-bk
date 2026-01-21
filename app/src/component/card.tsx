const card = "flex w-96 flex-col bg-white shadow-xl"
const body = "flex flex-col p-8"
const titleCls = "pb-6 text-2xl font-bold text-gray-700"
const descCls = "text-lg text-gray-700"

type CardProps = {
    title: string
    desc: string
}

export default function Card({ title, desc }: CardProps) {
  return (
    <div className={card}>
      <div className={body}>
        <div className={titleCls}>{title}</div>
        <div className={descCls}>{desc}</div>
      </div>
    </div>
  )
}