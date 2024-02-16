import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <PaginationRoot>
        <PaginationContent>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex w-auto items-center justify-center text-sm font-medium">
              Página {pageIndex + 1} de {pages}
            </div>

            <div className="flex items-center space-x-2">
              <PaginationLink
                role="first-page"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => onPageChange(0)}
                disabled={pageIndex === 0}
              >
                <span className="sr-only">Primeira página</span>
                <ChevronsLeft className="h-4 w-4" />
              </PaginationLink>

              <PaginationPrevious
                role="previous"
                onClick={() => onPageChange(pageIndex - 1)}
                disabled={pageIndex === 0}
              />
              <PaginationNext
                role="next"
                onClick={() => onPageChange(pageIndex + 1)}
                disabled={pages <= pageIndex + 1}
              />

              <PaginationLink
                role="last-page"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => onPageChange(pages - 1)}
                disabled={pages <= pageIndex + 1}
              >
                <span className="sr-only">Última página</span>
                <ChevronsRight className="h-4 w-4" />
              </PaginationLink>
            </div>
          </div>
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
