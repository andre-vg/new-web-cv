
// Componente bem simples que recebe uma imagem 
// e se está selecionada ou não (apenas para efeitos visuais)

interface FlagProps {
    image: any
    isSelected?: boolean
    }


const Flag = ({ image, isSelected, ...props }: FlagProps) => (
  <img alt="flag" src={image} className={isSelected ? 'flex' : 'flex w-10 h-10 cursor-pointer'} {...props} />
)

export default Flag