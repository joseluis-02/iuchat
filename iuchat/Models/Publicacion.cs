using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace iuchat.Models
{
    public class Publicacion
    {
        public int id_publicacion { get; set; }
        public int user_publicacion { get; set; }
        public string titulo { get; set; }
        public string contenido { get; set; }
        public string foto { get; set; }
        public string fecha { get; set; }
        public string hora { get; set; }
        private Usuario _user = new Usuario();
        public Usuario user
        {
            get { return _user; }
            set { _user = value; }

        }

        public void addPubli()
        {
            iuchatEntities db = new iuchatEntities();
            publicacion obj = new publicacion();
            obj.user_publicacion = this.user_publicacion;
            obj.titulo = this.titulo;
            obj.contenido = this.contenido;
            obj.foto = this.foto;
            db.publicacion.Add(obj);
            db.SaveChanges();
        }

        public void deletePubli()
        {
            iuchatEntities db = new iuchatEntities();
            publicacion obj = db.publicacion.Single(x => x.id_publicacion == this.id_publicacion);
            db.publicacion.Remove(obj);
            db.SaveChanges();
        }

        public static List<Publicacion> listPubli()
        {
            iuchatEntities db = new iuchatEntities();
            List<Publicacion> lista = new List<Publicacion>();
            foreach (var item in db.publicacion.ToList())
            {
                Publicacion obj = new Publicacion();
                obj.id_publicacion = item.id_publicacion;
                obj.user_publicacion = (int)item.user_publicacion;
                obj.titulo = item.titulo;
                obj.contenido = item.contenido;
                obj.fecha = item.fecha;
                obj.hora = item.hora;
                obj.foto = item.foto;
                lista.Add(obj);
            }
            return lista;
        }
    }
}