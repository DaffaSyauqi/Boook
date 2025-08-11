import type { ColumnDef } from "@tanstack/vue-table";
import type { Users } from "~/types/users";
import DataTableColumnHeader from "~/components/table/DataTableColumnHeader.vue";
import { Badge } from "@/components/ui/badge";

export function getColumns(): ColumnDef<Users>[] {
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
      accessorKey: "email",
      header: ({ column }) =>
        h(DataTableColumnHeader, {
          column,
          title: "Email",
        }),
    },
    {
      accessorKey: "name",
      header: ({ column }) =>
        h(DataTableColumnHeader, {
          column,
          title: "Name",
        }),
    },
    {
      accessorKey: "isValidEmail",
      header: ({ column }) =>
        h(DataTableColumnHeader, {
          column,
          title: "Valid Email",
        }),
      cell: ({ row }) => {
        const isValid = row.getValue("isValidEmail") === 1;
        return h(Badge, { variant: isValid ? "default" : "destructive" }, () =>
          isValid ? "Yes" : "No"
        );
      },
    },
  ];
}
