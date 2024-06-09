import { configure, observable, autorun } from "mobx";

configure({ enforceActions: "never" });

const person = observable({
	firstName: "John",
	lastName: "Doe",
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
});

autorun(() => {
	console.log(`Full name is: ${person.fullName}`);
});

person.firstName = "Jane";
person.lastName = "Smith";
