import { QueryProductSearchArgs } from "@/server/types/GraphQL"

function getFacetValueFilter(categoryCode, filters = []) {
  let facetValueFilter = ""
  if (categoryCode) {
    facetValueFilter = `categoryCode:${categoryCode},`
  }
  return facetValueFilter + filters.join(",")
}

export const buildProductSearchVars = ({
  categoryCode = "",
  pageSize = 20,
  filters = [],
  startIndex = 0,
  sort = "",
  search = "",
  filter = "",
}: {
  categoryCode: string
  pageSize?: number
  filters?: Array<string>
  startIndex?: number
  sort?: string
  search?: string
  filter?: string
}): QueryProductSearchArgs => {
  let facetTemplate = ""
  let facetHierValue = ""
  facetTemplate = `categoryCode:${categoryCode || "_root"}`
  if (categoryCode) {
    facetHierValue = `categoryCode:${categoryCode}`
  }

  const facetValueFilter = getFacetValueFilter(categoryCode, filters)
  return {
    query: search,
    startIndex,
    pageSize,
    sortBy: sort,
    facetHierValue,
    facetTemplate,
    facetValueFilter,
    filter,
  }
}
