import { BasicLayout } from '@/layouts/BasicLayout'

export function FrameworkGuideLayout({ title, description, children }) {
  return (
    <BasicLayout>
      <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-blue-500 dark:text-blue-800">
            Installation
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight dark:text-zinc-200">
            {title}
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-400">{description}</p>
        </div>
      </header>
      <section className="mb-16 relative">{children}</section>
    </BasicLayout>
  )
}
