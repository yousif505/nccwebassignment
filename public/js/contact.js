var contactData;
const getDataField = (id) => {
    return document.getElementById(id)
}

window.onload = () => {
    contactData = getData()
}

const getData = () => {
    fetch( '../js/contact.json').then((response) => {
        return response.json()
    }).then((data) => {
        contactData = data;
        return data
    })
}

contactBtn.addEventListener('click', () => {
    const firstName = getDataField('firstName').value
    const lastName = getDataField('lastName').value
    const emailid = getDataField('emailid').value
    const msgBox = getDataField('msgBox').value
    const mobile = getDataField('mobile').value

     const data = {
         id : `${Data.now()}`,
         firstName : firstName,
         lastName : lastName,
         emailid : emailid,
         mobile : mobile,
         msgBox : msgBox
     }
     console.log(Data)
})