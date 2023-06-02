export function removeEmpty(str:string) {
    return str.split(' ').filter((e:string) => e.trim() !== "").join(" ")
}