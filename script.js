const input_submit = document.querySelector('input[type=submit]');
const data_pack = []

const input_data = input_submit.addEventListener('click', e => {
    e.preventDefault()

    const input_name = document.querySelector('input[name=name]')
    const input_email = document.querySelector('input[name=email]')
    const input_text = document.querySelector('textarea[name=message]')
    
    const json = {
        "name": input_name.value,
        "email": input_email.value,
        "message": input_text.value
    }

    data_pack.push(json)

    console.log(data_pack);

    document.querySelector('form').reset()

})