/**
 * Function to add the repo name to URL
 */

 export let addRepoName = (path) => {
    var repoName = process.env.PUBLIC_URL;
    var  link = (repoName) ? `/${repoName}${path}` : path;
    
    return link;
  }