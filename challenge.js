// Debug The Function & Calculate The Answer

const calculateAnswer = (email) =>

{

    const [localPart, domain] = email.split("@");

    const [hostname, ...countryCodes] = domain.split(".");

    return `${localPart.length}${hostname.length}${countryCodes.reduce( (a,cc) => a + cc.length, "") }`;

}

console.log(calculateAnswer('19211A0584@bvrit.ac.in'))