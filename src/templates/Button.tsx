import Button from "@/components/ui/Button";

export default function SumpleButton() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-center">Default Buttons</h1>
        <Button variant={"defualt"} size={"sm"}>
          Small
        </Button>
        <Button variant={"defualt"} size={"md"}>
          Mediam
        </Button>
        <Button variant={"defualt"} size={"lg"}>
          Large
        </Button>
        <Button variant={"defualt"} size={"xl"}>
          Extra Large
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-center">Outline Buttons</h1>
        <Button variant={"outline"} size={"sm"}>
          Small
        </Button>
        <Button variant={"outline"} size={"md"}>
          Mediam
        </Button>
        <Button variant={"outline"} size={"lg"}>
          Large
        </Button>
        <Button variant={"outline"} size={"xl"}>
          Extra Large
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-center">Primary Buttons</h1>
        <Button variant={"primary"} size={"sm"}>
          Small
        </Button>
        <Button variant={"primary"} size={"md"}>
          Mediam
        </Button>
        <Button variant={"primary"} size={"lg"}>
          Large
        </Button>
        <Button variant={"primary"} size={"xl"}>
          Extra Large
        </Button>
      </div>
    </div>
  );
}
