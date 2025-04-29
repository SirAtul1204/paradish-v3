"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type TableOptions,
} from "@tanstack/react-table";
import { useParams } from "next/navigation";
import Button from "~/app/_components/button";
import Loader from "~/app/_components/loader";
import { api } from "~/trpc/react";

type Employee = {
  image: string | null;
  role: "OWNER";
  joinedAt: Date;
  payPerMonth: string | null;
  employeeId: string;
  identification: string | null;
  user: {
    name: string;
  };
};

const Table = ({ employees }: { employees: Employee[] }) => {
  const columnHelper = createColumnHelper<Employee>();

  const columns = [
    columnHelper.accessor("employeeId", {
      header: "Employee ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user.name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("role", {
      header: "Role",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("joinedAt", {
      header: "Joined At",
      cell: (info) => info.getValue().toLocaleString(),
    }),
  ];

  const options: TableOptions<Employee> = {
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  };

  const table = useReactTable(options);

  return (
    <table className="border-border w-full border-collapse border">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="text-secondary-text border-border bg-surface border px-4 py-2"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border-border border px-4 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function ManageEmployees() {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  const { data, isPending, isError } = api.employee.getAll.useQuery({
    restaurantId: parseInt(restaurantId),
  });

  const openAddEmployeeModal = () => {
    //TOOD
  };

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Sorry something went wrong!</h1>;
  }

  return (
    <div className="text-primary-text relative h-full w-full">
      <h1 className="mb-8 text-center text-2xl">Manage Employees</h1>
      <div className="mb-4 flex items-center justify-end">
        <Button media="/plus.svg" onClick={openAddEmployeeModal}>
          Add employee
        </Button>
      </div>
      <Table employees={data.employees} />
      <div className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md backdrop-blur-xs">
        <div className="bg-surface border-border w-4/5 rounded-md border p-4">
          Hello world
        </div>
      </div>
    </div>
  );
}
