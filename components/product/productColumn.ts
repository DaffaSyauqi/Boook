import type { ColumnDef } from "@tanstack/vue-table";
import type { Product } from "~/types/product";
import DataTableColumnHeader from "~/components/table/DataTableColumnHeader.vue";
import DataTableRowActions from "~/components/table/DataTableRowActions.vue";

export function getColumns(
  onImage: (product: Product) => void,
  onEdit: (product: Product) => void,
  onDelete: (product: Product) => void
): ColumnDef<Product>[] {
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
          title: "Product Name",
        }),
    },
    {
      accessorKey: "category.name",
      header: ({ column }) =>
        h(DataTableColumnHeader, {
          column,
          title: "Category",
        }),
    },
    {
      accessorKey: "price",
      header: ({ column }) =>
        h(DataTableColumnHeader, {
          column,
          title: "Price",
        }),
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return h("div", formatted);
      },
    },
    {
      id: "actions",
      cell: ({ row }) =>
        h(DataTableRowActions, {
          row,
          showImage: true,
          onImage: () => onImage(row.original),
          onEdit: () => onEdit(row.original),
          onDelete: () => onDelete(row.original),
        }),
    },
  ];
}
