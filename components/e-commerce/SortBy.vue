<template>
  <div class="w-full max-w-sm">
    <h2 class="text-lg font-bold tracking-tight">Sort by</h2>

    <div class="flex pt-2">
      <ButtonGroup>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline"> Default </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="[--radius:1rem]">
            <DropdownMenuGroup>
              <DropdownMenuItem> Name </DropdownMenuItem>
              <DropdownMenuItem> Category </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon">
              <Icon name="lucide-chevrons-up-down" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="[--radius:1rem]">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Icon name="lucide-chevron-up" />
                Asc
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon name="lucide-chevron-down" />
                Desc
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  </div>
</template>
