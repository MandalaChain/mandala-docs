import Figure from '/src/components/figure'

# Configure MetaMask

## Add network to MetaMask

:::info
**Note:** Before following the instructions below, ensure that you have already installed MetaMask on your browser. If not, follow the installation guide [here](https://metamask.io/download/).
:::

This guide provides a step-by-step process to connect MetaMask to the Niskala Network.

1.  **Open MetaMask**  
    Click on the MetaMask icon in your browser to open the extension.
    <Figure src={require('/img/assets/build/metamask-1.png').default} width="300" />

2.  **Add a Custom Network**  
Click on the network dropdown icon in the top-left corner of MetaMask, then select the `Add a custom network` button.
   <Figure src={require('/img/assets/build/metamask-2.png').default} width="300" />

3.  **Enter Niskala Network Details**  
     Fill in the following details in the custom network form:

    <center>
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Network</td>
          <td>Niskala Network</td>
        </tr>
        <tr>
          <td>HTTPS</td>
          <td>
            <a href="https://mlg1.mandalachain.io/">https://mlg1.mandalachain.io/</a> (testnet)<br></br>
            <a href="https://mlg2.mandalachain.io/">https://mlg2.mandalachain.io/</a> (devnet)
          </td>
        </tr>
        <tr>
          <td>Chain ID</td>
          <td>6025</td>
        </tr>
        <tr>
          <td>Symbol</td>
          <td>KPGT</td>
        </tr>
      </tbody>
    </table>
    </center>
    <Figure src={require('/img/assets/build/metamask-3.png').default} width="300" />

4.  **Switch to Niskala Network**  
    After saving, select `Niskala Network` from the network dropdown menu to switch to it.
    <Figure src={require('/img/assets/build/metamask-4.png').default} width="300" />

5.  **Manage Your Account**  
    You can now view your account balance, send transactions, and interact with dApps on the Niskala Network.
    <Figure src={require('/img/assets/build/metamask-5.png').default} width="300" />
