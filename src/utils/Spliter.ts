export const spilter = (name: string) => {
    const string = name.split(' ');
    if (string.length === 2) {
        const partOne = string[0].charAt(0);
        const partTwo = string[1].charAt(0);
        const parts = partOne + partTwo
        return parts;
    } else {
        const parts = string[0].charAt(0);
        return parts;
    }
}