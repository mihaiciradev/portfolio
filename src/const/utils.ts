export const isStringValid = (str: string): boolean => {
    // Regular expression to match any non-empty string with at least one word character
    const regex = /\S/;

    // Check if the string matches the regular expression
    if (!regex.test(str)) {
        return false;
    }

    // Regular expression to match any word or phrase
    const wordRegex = /\w+/;

    // Check if the string contains at least one word or phrase
    if (!wordRegex.test(str)) {
        return false;
    }

    // Return true if the string passes both checks
    return true;
}


export const typingEffect = (
    strings: string[],
    letterMs: number,
    wordMs: number,
    loop: boolean,
    element: any,
    currentAuxiliaryIndex = 0) => {

    if (currentAuxiliaryIndex === strings.length) {
        currentAuxiliaryIndex = 0;
        if (!loop)
            return;
    }

    const currentString = strings[currentAuxiliaryIndex];
    const nextString = strings?.[currentAuxiliaryIndex + 1] || strings[0];

    //delete
    for (let i = 0; i < currentString.length; i++) {
        setTimeout(() => {
            element.innerHTML = currentString.substring(0, currentString.length - i)
        }, letterMs * i)

        //construct
        if (i === currentString.length - 1)
            setTimeout(() => {
                for (let j = 1; j < nextString.length + 1; j++) {
                    setTimeout(() => {
                        element.innerHTML = nextString.substring(0, j);
                    }, letterMs * j)
                }

                setTimeout(() => {
                    typingEffect(strings, letterMs, wordMs, loop, element, currentAuxiliaryIndex + 1)
                }, (letterMs * nextString.length + wordMs))

            }, letterMs * currentString.length)
    }

}

export function scrollSmoothTo(element: HTMLElement) {
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }