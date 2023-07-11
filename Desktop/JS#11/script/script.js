class User {
    constructor(obj){
        this.data = {
            id: obj.id,
            name: obj.name,
            email: obj.email,
            address: obj.address,
            phone: obj.phone
        };
    }

    edit(obj){
        this.data = {...this.data, ...obj};
    }

    get(){
        return this.data;
    }
}

class Contacts {
    constructor(){
        this.data = [];
        this.id = 0;
    }

    add(user){
        user = {...user, id: this.id++};
        this.data.push(new User(user));
    }

    edit(id, obj){
        let user = this.data.find(user => user.data.id === id);
        if (user) {
          user.edit(obj);
        }
    }

    remove(id){
        this.data = this.data.filter(user => user.data.id !== id);
    }

    get() {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    constructor(selector){
        super()
        this.contact = document.querySelector(selector);
        this.noteContainer = document.createElement('div');
        this.init();
    }

    init(){
            let title = document.createElement('h1');
            title.innerText = 'Contacts';
            this.contact.append(title);
             this.inputContainer = document.createElement('form');
             let block = document.createElement('div');
             block.className = 'block';
             let name = document.createElement('input');
             name.setAttribute('type', 'text');
             name.placeholder = 'Enter your name';
             let email = document.createElement('input');
             email.setAttribute('type', 'text');
             email.placeholder = 'Enter your email';
             let address = document.createElement('input');
             address.setAttribute('type', 'text');
             address.placeholder = 'Enter your address';
             let phone = document.createElement('input');
             phone.setAttribute('type', 'text');
             phone.placeholder = 'Enter your phone number';
             let send = document.createElement('button');
             send.className = 'send';
             send.innerText = 'Add contact';
             send.setAttribute('type', 'submit');
             block.append(name, email, address, phone, send);
             this.inputContainer.append(block);

             this.inputContainer.addEventListener('submit', e => {
                e.preventDefault();

                let data = {
                    name: name.value,
                    email: email.value,
                    address: address.value,
                    phone: phone.value,
                }

                this.add(data);
                name.value = '';
                email.value = '';
                address.value = '';
                phone.value = '';

                this.render();
             })

             this.contact.append(this.inputContainer, this.noteContainer);

    }

    render(){
        this.noteContainer.innerHTML = '';
        this.data.forEach(user => {
            let flag = false;
            let item = document.createElement('div');
            item.className = 'item';
            let name = document.createElement('p');
            name.innerHTML = user.data.name;
            let email = document.createElement('p');
            email.innerHTML = user.data.email;
            let address = document.createElement('p');
            address.innerHTML = user.data.address;
            let phone = document.createElement('p');
            phone.innerHTML = user.data.phone;
            let buttons = document.createElement('div');
            buttons.className = 'buttons';
            let edit = document.createElement('button');
            edit.innerText = 'Edit';
            edit.className = 'edit';
            let remove = document.createElement('button');
            remove.innerText = 'Remove';
            remove.className = 'remove';
            buttons.append(edit, remove);
            item.append(name, email, address, phone, buttons);

            remove.addEventListener('click', () => {
                this.remove(user.data.id);
                this.render();
            })

            edit.addEventListener('click', () => {
                if(flag){
                    name.contentEditable = false;
                    email.contentEditable = false;
                    address.contentEditable = false;
                    phone.contentEditable = false;
                    let data = {
                        name: name.innerText,
                        email: email.innerText,
                        address: address.innerText,
                        phone: phone.innerText
                    };
                    this.edit(user.data.id, data);
                    edit.innerText = 'Edit';
                    flag = !flag
                }else{
                    name.contentEditable = true;
                    email.contentEditable = true;
                    address.contentEditable = true;
                    phone.contentEditable = true;
                    edit.innerText = 'Save';
                    flag = !flag;
                }
            })

            this.noteContainer.append(item);
        });
    }
}

new ContactsApp('.contacts');