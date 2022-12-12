export default()=>{
    const container = document.createElement('div');
    const template =`
 
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.5rem;
            background-color: #333;
            color: whitesmoke;
        }

        input,
        button {
            font: inherit;
            width: max-content;
        }

        form {
            display: flex;
            flex-flow: column nowrap;
            gap: 1.5rem;
        }
    </style>

    <h1>Olá admin</h1>
    <h3>Faça um uplod</h3>
    <form id="uploadForm">
        <input type="file" id="myFiles" accept="image/*" multiple />
        <button>upload</button>
    </form>
    <h2></h2>
    <h3></h3>


    `;
    container.innerHTML=template;
    return container;
}