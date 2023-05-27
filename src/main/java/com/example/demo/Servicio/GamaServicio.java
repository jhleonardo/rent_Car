
package com.example.demo.Servicio;

import com.example.demo.Modelo.Gama;
import com.example.demo.Repositorio.GamaRepositorio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GamaServicio {
    @Autowired
    private GamaRepositorio gamaRepositorio;
    
    public  List<Gama> getAll(){
        return gamaRepositorio.getAll();
        
    }
    public Optional<Gama> getGama(int gamaID){
        return gamaRepositorio.getGama(gamaID);
    }
    
    public Gama save(Gama gama){
        if(gama.getIdGama() == null){
            return gamaRepositorio.save(gama);
        }else{
            Optional<Gama> gama1 = gamaRepositorio.getGama(gama.getIdGama());
            if(gama1.isEmpty()){
                return gamaRepositorio.save(gama);
            }else{
                return gama;
            }
        }
    }
}
