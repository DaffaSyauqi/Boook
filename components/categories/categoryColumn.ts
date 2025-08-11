import type { ColumnDef } from "@tanstack/vue-table";
import type { Category } from "~/types/category";
import DataTableColumnHeader from "~/components/table/DataTableColumnHeader.vue";
import DataTableRowActions from "~/components/table/DataTableRowActions.vue";

export function getColumns(
  onEdit: (category: Category) => void,
  onDelete: (category: Category) => void
): ColumnDef<Category>[] {
  return [
    {
      id: "rowNumber",
      header: () => h("div", "#"),
      cell: ({ table, row }) => {
        const rowIndex = table
          .getRowModel()
          .rows.findIndex((r) => r.id === row.id);
        const pageIndex = table.getState().pagination.pageIndex;
        const pageSize = table.getState().pagination.pageSize;
        return h("div", {}, pageIndex * pageSize + rowIndex + 1);
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) =>
        h(DataTableColumnHeader, {
          column,
          title: "Category Name",
        }),
    },
    {
      id: "actions",
      cell: ({ row }) =>
        h(DataTableRowActions, {
          row,
          showImage: false,
          onEdit: () => onEdit(row.original),
          onDelete: () => onDelete(row.original),
        }),
    },
  ];
}
