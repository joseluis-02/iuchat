using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace iuchat.Models
{
   
    public class sesion
    {
        
        public int id_user { get; set; }
        public string nombres { get; set; }
        public string apellidos { get; set; }
        public int celular { get; set; }
        public string usuario { get; set; }
        public string clave { get; set; }
        public string foto { get; set; }
        public static int id = 0;
        public object onSave()
        {
            sesion s = new sesion();
            s.id_user = this.id_user;
            s.nombres = this.nombres;
            s.apellidos = this.apellidos;
            s.celular = this.celular;
            s.usuario = this.usuario;
            s.clave = this.clave;
            s.foto = this.foto;
            id = s.id_user;
            return s;
        }
    }
    
}