## React App On Network

When designing your web app, one of the most useful things is to see is how it looks on different devices. You know what it looks like on a Laptop. How about a big monitor desktop or an iPhone?

The purpose of this repository is to teach you how to see your react app in a development environment across different devices. *Code through your PC, look at your app through your phone.* **Instantly**.

### Set Up Your React App (Node.js)

1. Type in `npx i create-react-app .` on your terminal. This creates your react web-app (where . is your current folder)
2. Run `npm start`, which launches a local environment of your web-app

![image](https://user-images.githubusercontent.com/98366672/229272684-df9b5572-839b-4d7d-aa70-fd5541c5e856.png)

You should see something similar to this. Note that running the I.P address of http://192.168.56.1:3000 will work on your local computer. But it **Will Not** work on other devices.

### Make It Work

http://192.168.56.1:3000 is a default I.P address for react. You want to be connected to your router's I.P. address, which you can easily find with `ipconfig` on Windows. Type this on windows powershell.

1. Find your router and get the `IPv4` address. The web-app is going to be hosted on `Your_IPv4:3000`. There is no need to change any code thanks to how creat-react-app was built.


2. Make sure that your router is on **Private** instead of **Public**. A private network is more trusted than a public network, which is why it techincally gives more power than public (imagine public means you're in a public area so your device trusts no one).

![image](https://user-images.githubusercontent.com/98366672/229273281-ffe52022-2eca-428c-b330-de2cffc59469.png)


3. Lastly, make sure that Node.js can run on private networks. In your Windows search bar, go to `Control Panel` and `System and Security`. Then under `Windows Defender Firewall`, click `Allow an app through Windows Firewall` and search for `Node.js JavaScript Runtime`. Make sure that Node.js is installed on your computer. 

<img src="https://user-images.githubusercontent.com/98366672/229273333-cc0be187-f94b-4763-9978-d9a37975633b.png" alt="hello world" width="550px">

4. You are finished. On your phone or other device, type in `Your_IPv4:3000`. Congrats! You are able to modify the web-app and it will instantly sync on your other device too. When you're finished with development, you can roll it into production! 

