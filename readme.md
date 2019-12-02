## You have an empty repository

To get started you will need to run these commands in your terminal.
New to Git? [Learn the basic Git commands](http://docs.atlassian.com/bitbucketserver/docs-061/Basic+Git+commands?utm_campaign=in-app-help&amp;utm_medium=in-app-help&amp;utm_source=stash)

  
### Configure Git for the first time

    git config --global user.name "Your Name"
    git config --global user.email "yourusername@deakin.edu.au"

	
### Working with your repository


#### **How do I obtain a Repository Git URL ?**
  
  
#### Browse to the Repository browse page location that you wish to clone/fork from the server
[https://bitbucket-students.deakin.edu.au](https://bitbucket-students.deakin.edu.au)

Ensure you have entered the repository page browser and then: hover, find and click on the &#39;Clone&#39; button from the repository left menu.

This should show you the full URL of the repository which you can use.


#### **I just want to clone a repository**

If you want to simply clone a repository then visit the repo page, find and copy the repository&#39;s git URL. The git URL should end with .git

You can then use a git terminal to type
git clone &quot;Insert-your-git-url-here&quot;

  
    **Example only:** git clone https://bitbucket-students.deakin.edu.au/scm/test/testing.git
    
  
#### **My code is ready to be pushed**

If you already have code ready to be pushed to this repository then this is an example of the type of commands you would run within your terminal.
    
**Example only: Replace the testing URL in the example below with the actual git URL you wish to use !!!**
  
    cd existing-project
	
    git init
	
    git add --all
	
    git commit -m "Initial Commit"
	
    git remote add origin https://bitbucket-students.deakin.edu.au/scm/test/testing.git
	
    git push -u origin master
	
	
	
#### **My code is already tracked by Git**
  
If your code is already tracked by Git then set this repository as your &quot;origin&quot; to push to.
  
  
**Example only: Replace the testing URL in the example below with the actual git URL you wish to use !!!**
  
    cd existing-project
	
    git remote set-url origin https://bitbucket-students.deakin.edu.au/scm/test/testing.git
	
    git push -u origin --all
	
    git push origin --tags