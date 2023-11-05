import React from 'react';

function ImageComponent(props) {
    // Combine o diretório da imagem com o nome do arquivo da imagem
    const imageUrl = `${props.directory}/${props.imageName}`;

    return (
        <div>
            <img src={imageUrl} alt="Imagem" />
        </div>
    );
}

export default ImageComponent;
