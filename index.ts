// given async function below, who returns promise of {id:1, name:"Alice"}, extract return type of fetchUser into UserResponse type.
async function fetchUser() {
    return { id: 1, name: "Alice" };
  }

  let val = fetchUser();

type UserResponse=  Awaited<typeof val>
 