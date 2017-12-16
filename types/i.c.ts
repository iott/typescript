class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
// Error: Property 'state' is missing in type 'Image'.
// class ImageC implements SelectableControl {
// }
class LocationC {}
function invoke(t: SelectableControl) {
    console.log(t);
}
invoke(new Button());
console.log(new LocationC())
invoke(new LocationC());


