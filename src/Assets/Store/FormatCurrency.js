const CURRNECY_FORMATTER = new Intl.NumberFormat(undefined , {
    currency:"usd" ,
    style:"currency",
})
const formatCurrency  = (number) => {
    return CURRNECY_FORMATTER.format(number)
}


export default formatCurrency;