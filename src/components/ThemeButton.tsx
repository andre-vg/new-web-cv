import { Button } from "@nextui-org/react";
import { CgDarkMode } from "react-icons/cg";
function ThemeButton() {
  const handleTheme = () => {
    document.getElementById("theme")?.classList.toggle("dark");
  };

  return (
    <>
      <Button
        onClick={() => handleTheme()}
        isIconOnly
        color="primary"
        size="md"
        variant="flat"
      >
        <CgDarkMode
          className="text-primary-400 dark:text-secondary-500"
          size="auto"
        />
      </Button>
    </>
  );
}

export default ThemeButton;
