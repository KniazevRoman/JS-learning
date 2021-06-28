// #1 Fetch users from GitHub

async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
            return null;
            }
        );
        jobs.push(job);
    }
  
    let results = await Promise.all(jobs);

    console.log(results);
  
    return results;
}

getUsers(['iliakan', 'remy', 'faosjvaoigjasijgaijgaiosgj']);