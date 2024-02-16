import { ReactNode } from 'react'

export function TextError({ children }: { children: ReactNode }) {
  return <div className="mt-0.5 text-end text-sm text-red-500">{children}</div>
}
