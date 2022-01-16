const FA_ZERO_CODE = '۰'.charCodeAt(0)
const EN_ZERO_CODE = '0'.charCodeAt(0)
const IND_ZERO_CODE = '٠'.charCodeAt(0)

export const toEnglishDigit = (input: string | number) => {
    try {
        let str = input.toString()
        // persian digits [۰۱۲۳۴۵۶۷۸۹]
        str = str.replace(/[۰-۹]/g, (t) =>
            String.fromCharCode(t.charCodeAt(0) - FA_ZERO_CODE + EN_ZERO_CODE)
        )

        // arabic indic digits [٠١٢٣٤٥٦٧٨٩]
        str = str.replace(/[٠-٩]/g, (t) =>
            String.fromCharCode(t.charCodeAt(0) - IND_ZERO_CODE + EN_ZERO_CODE)
        )
        return str
    } catch (error) {
        return input as string
    }
}
