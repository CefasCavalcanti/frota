import Link from 'next/link'

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex rounded-md">
      <Link href="/asset" className=" group rounded-md">
        <div className="w-64 mx-auto text-center  rounded-md bg-slate-200 group-hover:bg-slate-800 transition-colors duration-300 ease-in-out">
          <div className="w-64 mx-auto text-center shadow-md  rounded-md p-4 text-slate-900 group-hover:text-white group-hover:bg-slate-800 transition-colors duration-300 ease-in-out">
            <h2 className="text-xl font-semibold ">Assets</h2>
            Acessar Ativos
          </div>
        </div>
      </Link>
    </div>
  )
}
