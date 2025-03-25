//type manipulation offered by TS
//template literal? - 

const mainUser = "max";

const greeting = `Hello there, ${mainUser}`;// here the ${} is used for template literal


//// usecase for template literal types

type ReadPermissions  = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

//what we want to do: create a new type having the followinf possible values
// type FilePermissions = `no-read-write` | `read-write` | `no-read-no-write | `read-no-write`;

//we can do so using template literal using:
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

