//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace iuchat
{
    using System;
    using System.Collections.Generic;
    
    public partial class mensajes
    {
        public int id { get; set; }
        public string sms { get; set; }
        public string user1 { get; set; }
        public string user2 { get; set; }
        public Nullable<int> chat_id { get; set; }
        public Nullable<bool> estado { get; set; }
        public string hora { get; set; }
        public string fecha { get; set; }
    
        public virtual chats chats { get; set; }
    }
}
