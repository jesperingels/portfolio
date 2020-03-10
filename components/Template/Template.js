import Header from '../Header/Header'
import Content from '../Content/Content'
import '../../public/css/global.css'

const Template = props => (
    <div>
        <Header/>
        <Content>
            {props.children}
        </Content>
    </div> 
  );
  
  export default Template;