
package com.example.demo.Controlador;

import com.example.demo.Modelo.Gama;
import com.example.demo.Servicio.GamaServicio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Gama")
public class GamaControlador {
    @Autowired
    private GamaServicio gamaService;
    @GetMapping("/all")
    public List<Gama> getGamas(){
        return gamaService.getAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Gama> getGama(@PathVariable("id") int gamaId){
        return gamaService.getGama(gamaId);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Gama save(@RequestBody Gama gama){
        return gamaService.save(gama);
    }

}
