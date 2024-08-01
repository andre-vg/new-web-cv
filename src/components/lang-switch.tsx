import { Button } from "@nextui-org/button";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import React from "react";
import { useRouter } from "../navigation";

export default function LangSwitch() {
  const items = [
    {
      key: "en",
      label: "Ingles",
    },
    {
      key: "pt",
      label: "Brasil",
    },
  ];

  const router = useRouter();
  return (
    <Popover placement="bottom" backdrop="blur">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Listbox
          items={items}
          aria-label="Dynamic Actions"
          onAction={(key: any) => router.replace("/", { locale: key })}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              color={item.key === "delete" ? "danger" : "default"}
              className={item.key === "delete" ? "text-danger" : ""}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </PopoverContent>
    </Popover>
  );
}
