import './App.css';
import { FaChessPawn } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa";
import { FaRegChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa";
import { FaRegChessKing } from "react-icons/fa6";
function App() {
  return (
    <table>
    <tr>
       
         <td class="w"><span ><FaChessRook /></span></td>
         <td class="d"><span ><FaChessKnight /></span></td>
         <td class="w"><span ><FaChessBishop /></span></td>
         <td class="d"><span><FaChessQueen /></span></td>
         <td class="w"><span><FaChessKing /></span></td>
         <td class="d"><span><FaChessBishop /></span></td>
         <td class="w"><span><FaChessKnight /></span></td>
         <td class="d"><span><FaChessRook /></span></td>
    </tr>
    <tr>
        
         <td class="d"><span><FaChessPawn /></span></td>
         <td class="w"><span><FaChessPawn /></span></td>
         <td class="d"><span><FaChessPawn /></span></td>
         <td class="w"><span><FaChessPawn /></span></td>
         <td class="d"><span><FaChessPawn /></span></td>
         <td class="w"><span><FaChessPawn /></span></td>
         <td class="d"><span><FaChessPawn /></span></td>
         <td class="w"><span><FaChessPawn /></span></td>
         </tr>
    <tr>
        
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
    </tr>
    <tr>
        
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         </tr>
    <tr>
        
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
    </tr>
    <tr>
        
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         <td class="d"></td>
         <td class="w"></td>
         </tr>
         <tr>
        
            <td class="w"><span><FaRegChessPawn /></span></td>
            <td class="d"><span><FaRegChessPawn /></span></td>
            <td class="w"><span><FaRegChessPawn /></span></td>
            <td class="d"><span><FaRegChessPawn /></span></td>
            <td class="w"><span><FaRegChessPawn /></span></td>
            <td class="d"><span><FaRegChessPawn /></span></td>
            <td class="w"><span><FaRegChessPawn /></span></td>
            <td class="d"><span><FaRegChessPawn /></span></td>
       </tr>
       <tr>
           
            <td class="d"><span><FaRegChessRook /></span></td>
            <td class="w"><span><FaRegChessKnight /></span></td>
            <td class="d"><span><FaRegChessBishop /></span></td>
            <td class="w"><span><FaRegChessQueen /></span></td>
            <td class="d"><span><FaRegChessKing /></span></td>
            <td class="w"><span><FaRegChessBishop /></span></td>
            <td class="d"><span><FaRegChessKnight /></span></td>
            <td class="w"><span><FaRegChessRook /></span></td>
   </tr>
   </table>
  );
}

export default App;
