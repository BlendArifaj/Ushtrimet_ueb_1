const useConsoleApiAssert = () => {
    // console.assert
    const sum = 25;
    console.assert(sum === 25, "Sum is not calculated correct!");
}

const useConsoleApiError = () => {
    // console.error
    const boolVar = false;
    if(!boolVar){
        console.error("User cannot access this part!");
    }
}

const useConsoleApiLog = () => {
    // console.log
    console.log("this is a log for user!");
}

useConsoleApiAssert();
useConsoleApiError();
useConsoleApiLog();

const executeAfterClickMeFunction = () => {
    alert("Hello Again!");
}

const clickMeFunction = () => {
    setTimeout(
        () => {
            alert("Hello!");
        },
        2000
    );
    executeAfterClickMeFunction();
}

const usePromise = () => {
    const promise = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    console.log("execution compelted!");
                    resolve(25);
                }, 2000
            )
        }
    );

    promise.then(
        (value) => {
            console.log("After resolve value is: ", value);
        }
    );
}

const usePromiseWithReject = () => {
    const promise = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    reject("Database connection failed!");
                }
            , 3000)
        }
    );

    promise.then(
        (r) => { console.log(r); }
    ).catch(
        (reason) => {
            alert(reason);
        }
    );
}

const usePromiseExample = () => {
    promise = new Promise(
        (resolve, reject) => {
            setTimeout(
                ()=> {
                    console.log("state: Loading ...");
                    resolve(1);
                },
                3000
            )
        }
    ).then(
        (r) => {
            setTimeout(
                ()=> {
                    console.log("state: Processing ...");
                },
                3000
            ) 
                        
        }
    ).finally(
        () => {
            setTimeout(
                ()=> {
                    console.log("state: Finished!");
                },
                3000
            ) 
        }
    )
}

// 

const history = window.history;
history.back();
history.forward();
history.go();

// Storage API
const sessionStorage = window.sessionStorage;
sessionStorage.setItem("calculated_value", 25.5);
sessionStorage.getItem('calculated_value');


const localStorage = window.localStorage;
localStorage.setItem("value", 5);
localStorage.getItem('value');


// Location API
const locationApi = window.location;
// locationApi.replace("https://www.google.com/")
// locationApi.reload()


const javascriptObject = {
    firstName: "Emri",
    lastName: "Mbiemri",
    mosha: 20
};

// const firstName = javascriptObject.firstName;
// const lastName = javascriptObject.lastName;

const { firstName, lastName } = javascriptObject;

console.log("firstName: ", firstName);
console.log("lastName: ", lastName);

// $("button#btnclick").on(
//     "click", 
//     ({ name }) => {
//         const name = e.name;
//     }
// )

const printUserData = (user) => {
    console.log(user.firstName);
}

const printUserDatav2 = ({firstName, lastName}) => {
    console.log(firstName, ' ', lastName);
}