export enum IconType {
    ArrowRight = "ArrowRight",
}

export type ButtonTypes = {
    label: string;
    icon?: IconType;
    type: "button";
    className?: string;
} | {
    label: string;
    icon?: IconType;
    type: "link";
    href: string;
    className?: string;
};