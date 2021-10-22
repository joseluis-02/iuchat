using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace iuchat.Models
{
    public class Usuario
    {
        public int id_user { get; set; }
        public string nombres { get; set; }
        public string apellidos { get; set; }
        public int celular { get; set; }
        public string usuario { get; set; }
        public string clave { get; set; }
        public string foto { get; set; }

    public void addUser()
    {
        iuchatEntities db = new iuchatEntities();
        usuario obj = new usuario();
        obj.nombres = this.nombres;
        obj.apellidos = this.apellidos;
        obj.celular = this.celular;
        obj.usuario1 = this.usuario;
        obj.clave = this.clave;
        obj.foto = this.foto;
        db.usuario.Add(obj);
        db.SaveChanges();
    }
    public void updateUser()
    {
        iuchatEntities db = new iuchatEntities();
        usuario obj = db.usuario.Single(x => x.id_user == this.id_user);
            obj.nombres = this.nombres;
            obj.apellidos = this.apellidos;
            obj.celular = this.celular;
            obj.usuario1 = this.usuario;
            obj.clave = this.clave;
            obj.foto = this.foto;
            db.SaveChanges();
    }

    public void deleteUser()
    {
        iuchatEntities db = new iuchatEntities();
        usuario obj = db.usuario.Single(x => x.id_user == this.id_user);
        db.usuario.Remove(obj);
        db.SaveChanges();
    }
        public object obtener(string u,string c)
        {
            iuchatEntities db = new iuchatEntities();
            Usuario obj = new Usuario();
            foreach (var item in db.usuario.ToList())
            {
                if (item.usuario1 == u && item.clave == c)
                {
                    obj.id_user = item.id_user;
                    obj.nombres = item.nombres;
                    obj.apellidos = item.apellidos;
                    obj.celular = (int)item.celular;
                    obj.usuario = item.usuario1;
                    obj.clave = item.clave;
                    obj.foto = item.foto;
                    break;
                }
            }
            return obj;
        }
        public static List<Usuario> listUser()
    {
        iuchatEntities db = new iuchatEntities();
        List<Usuario> lista = new List<Usuario>();
        foreach (var item in db.usuario.ToList())
        {
            Usuario obj = new Usuario();
                obj.id_user = item.id_user;
                obj.nombres = item.nombres;
                obj.apellidos = item.apellidos;
                obj.celular = (int)item.celular;
                obj.usuario = item.usuario1;
                obj.clave = item.clave;
                obj.foto = item.foto;
                lista.Add(obj);
        }
        return lista;
    }
    }
}