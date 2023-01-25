const getCleanedZipCode = (value) => {}


getCleanedZipCode("") // ""
getCleanedZipCode("123") // ""
getCleanedZipCode(123) // ""
getCleanedZipCode("1-2-3-4-5") // ""
getCleanedZipCode("12-345") // "12-345"
getCleanedZipCode("12 345") // "12-345"
getCleanedZipCode("12345") // "12-345"
getCleanedZipCode(12345) // "12-345"
getCleanedZipCode("123456") // ""