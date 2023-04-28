
export type Level = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[];
    yourIMC?: number
}

export const Levels:Level[]=[
    {title:'magreza', color:'#96a3ab', icon:'down', imc:[0, 18.5]},
    {title:'normal', color:'#0ead69', icon:'up', imc:[18.6, 24.9]},
    {title:'sobrepeso', color:'#e2b039', icon:'down', imc:[25, 30]},
    {title:'obesidade', color:'#c3423f', icon:'down', imc:[30.1, 99]}
];

export const calculateIMC=(height: number, weight: number)=>{
    const imc = weight / (height*height);

    for (let i in  Levels) {
        if (imc >= Levels[i].imc[0] && imc < Levels[i].imc[1]) {
            let levelCopy : Level = {...Levels[1] };

            levelCopy.yourIMC= parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
};