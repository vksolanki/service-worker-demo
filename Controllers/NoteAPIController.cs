using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SWDemo.Models;

[Produces("application/json")]
[Route("api/[controller]")]
public class NoteController : ControllerBase
{
    private readonly NoteDBContext context;

    public NoteController(NoteDBContext _context)
    {
        context = _context;
    }

    [HttpGet("getall")]
    public async Task<List<NoteData>> GetAllAsync()
    {
        return await context.NoteDatas.ToListAsync();
    }

    [HttpPost("add")]
    public async Task<NoteData> Add([FromBody] NoteData _Data)
    {
        _Data.Id = Guid.NewGuid();
        await context.NoteDatas.AddAsync(_Data);
        context.SaveChanges();
        return _Data;
    }
}