using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace iuchat.Models
{
    public class Amigos
    {
        public int id { get; set; }
        public int id_user_primario { get; set; }
        public int id_user_secundario { get; set; }
        public void addFriend()
        {
            iuchatEntities db = new iuchatEntities();
            tamigos obj = new tamigos();
            obj.id_user_primario = this.id_user_primario;
            obj.id_user_secundario = this.id_user_secundario;
            db.tamigos.Add(obj);
            db.SaveChanges();
        }
        public static List<Amigos> listaAmigos()
        {
            iuchatEntities db = new iuchatEntities();
            List<Amigos> lista = new List<Amigos>();
            foreach (var item in db.tamigos.ToList())
            {
                Amigos obj = new Amigos();
                obj.id = (int)item.id;
                obj.id_user_primario = (int)item.id_user_primario;
                obj.id_user_secundario = (int)item.id_user_secundario;
                lista.Add(obj);
            }
            return lista;
        }
    }
}